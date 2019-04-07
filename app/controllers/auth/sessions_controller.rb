class Auth::SessionsController < ApplicationController
	
	def create
		if params[:token].present?
			@user = User.find_by(confirmation_token: params[:token])
			start_session = new_with_token
      @user.disable_confirmation_token unless @user&.confirmation_token.nil?
		else
			@user = User.find_by(email: params[:email])
			start_session = new_with_password
		end
		
		if start_session
      UpdateTweetsWorker.perform_async(@user.id)
			render json: @user.as_json(only: [:email, :authentication_token, :hasFollowedAccounts]), status: :created
		else
			head(:unauthorized)
		end
	end
	
	def destroy
		current_user.authentication_token = nil
		if current_user.save
			head(:ok)
		else
			head(:unauthorized)
		end
	end
	
	private
		def new_with_token
		  @user&.confirmed? ? true : false
		end
		
		def new_with_password
			if @user&.confirmed? && @user&.valid_password?(params[:password])
				true
      else
        false
			end
		end
	
end