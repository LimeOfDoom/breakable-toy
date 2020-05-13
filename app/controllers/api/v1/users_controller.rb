class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  private

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer, scope: current_user)
  end
end
