class Api::V1::ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :mailbox, :conversation
  before_action :check_current_user_in_conversation, :only => [:show, :update, :destroy]

  def index
    @user = User.find(params[:id])
    conversation_messages = conversation.messages.order(created_at: :desc)
    render json: conversation_messages
  end

  def show
    user = User.find(params[:id])
    conversation_messages = conversation.messages.order(created_at: :desc)
    render json: conversation_messages
  end

   def reply
    current_user.reply_to_conversation(conversation, conversation_params[:body])
  end

  # def trashbin
  #   @trash ||= current_user.mailbox.trash.all
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

  def target_mailbox
    @target_mailbox ||= @user.mailbox
  end

  def mailbox
    @mailbox ||= current_user.mailbox
  end

  def conversation
    @conversation ||= mailbox.conversations.find(params[:id])
  end
end
