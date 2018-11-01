class Auth::ConfirmationsController < ApplicationController
	def new 
		if params[:token].present?
			@user = User.find_by(confirmation_token: params[:token])
			@user.update_attributes(confirmed_at: DateTime.now) unless @user.nil? || @user.confirmed?
    end
    
    if @user
      redirect_to "http://localhost:3000/loginWith/#{params[:token]}"
    else
		  redirect_to "http://localhost:3000/login"
    end
	end
end
