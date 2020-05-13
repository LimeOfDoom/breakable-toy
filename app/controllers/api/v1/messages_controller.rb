class Api::V1::MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :get_mailbox, :get_box

  # def new
  #   @user = User.find(params[:user])
  #   @message = current_user.messages.new
  #   render json: @message
  # end

  def create
    @recipient = User.find(params[:user])
    current_user.send_message(@recipient, params[:body], params[:subject])
    flash[:notice] = "Message has been sent!"
    redirect_to :conversations
  end
end
