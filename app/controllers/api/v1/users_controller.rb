class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    user_conversations = user.mailbox.inbox
    if user_conversations.empty?
      render json: {
        user: serialized_data(user, UserSerializer)
      }
    else
      render json: {
        user: serialized_data(user, UserSerializer),
        messages: user_conversations[0].messages.order(created_at: :desc)
      }
    end
  end

  private

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer, scope: current_user)
  end
end
