class Api::V1::ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :mailbox, :conversation
  before_action :check_current_user_in_conversation, :only => [:show, :update, :destroy]

  def create
    recipients = User.where(id: conversation_params[:recipients])
    conversation = current_user.send_message(recipients, conversation_params[:body], conversation_params[:subject]).conversation
  end

  def show
    conversation_messages = conversation.messages.order(created_at: :desc)
    render json: conversation_messages
  end

  def reply
    current_user.reply_to_conversation(conversation, conversation_params[:body])
  end

  # def trashbin
  #   trash ||= current_user.mailbox.trash.all
  # end

  # def trash
  #   conversation.move_to_trash(current_user)
  #   redirect_to :conversations
  # end

  # def untrash
  #   conversation.untrash(current_user)
  #   redirect_to :back
  # end

  private

  def conversation_params
    params.require(:conversation).permit(:subject, :body, recipients:[])
  end

  def mailbox
    @mailbox ||= current_user.mailbox
  end

  def conversation
    @conversation ||= mailbox.conversations.find(params[:id])
  end
end
