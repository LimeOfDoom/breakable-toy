class Api::V1::OrganizationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Organization.all
  end

  def show
    render json: Organization.find(params[:id])
  end
end
