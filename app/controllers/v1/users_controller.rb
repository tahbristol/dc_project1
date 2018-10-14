class V1::UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		if @user.save
			render json: @user.as_json(only: [:email, :authentication_token, :hasFollowedAccounts]), status: :created
		else
			head(:not_implemented)
		end
	end
	
	def user_platform_info
		render json: current_user.user_platform_info
	end
	
	def user_followed_accounts_info
		render json: current_user.user_followed_accounts_info.compact
	end
	
	private
	
		def user_params
			params.require(:user).permit(:email, :password, :password_confirmation)
		end
end
