class Auth::ConfirmationsController < ApplicationController
	def create 
		if params[:token].present?
			@user = User.find_by(confirmation_token: params[:token])
			@user.update_attributes(confirmed_at: DateTime.now) unless @user.nil? || @user.confirmed?
    end
    
    if @user
      redirect_to session[:app_path] + "loginWith/#{params[:token]}"
    else
		  redirect_to session[:app_path]
    end
	end
end
