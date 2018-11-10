class ApplicationController < ActionController::API
	acts_as_token_authentication_handler_for User, fallback: :none
  before_action :set_app_path
  
  private
  
    def set_app_path 
      session[:app_path] = Rails.configuration.app_path unless session[:app_path].present?
      session[:api_path] = Rails.configuration.api_path unless session[:app_path].present?
    end
end
