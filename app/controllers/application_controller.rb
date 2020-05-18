class ApplicationController < ActionController::Base

  protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    if resource.role.downcase != "volunteer"
      users_path
    else
      organizations_path
    end
  end

  def after_sign_up_path_for(resource)
    if resource.role.downcase != "volunteer"
      users_path
    else
      organizations_path
    end
  end

    private

  def authenticate_user!
    if !user_signed_in?
      redirect_to welcomes_path, notice: "You must be logged in to view that page!"
    end
  end

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :role, :organization_id])
      devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name])
    end

end
