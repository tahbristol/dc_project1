class V1::UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		if @user.save
			render json: @user.as_json(only: [:email, :authentication_token, :hasFollowedAccounts]), status: :created
		else
			render json: {"Error": "User was not created"}
		end
	end
	
	
	
	private
	
		def user_params
			params.require(:user).permit(:email, :password, :password_confirmation)
		end
end
