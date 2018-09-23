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
		@user = current_user
		@platforms = @user.platforms
		@followed_accounts_size = @user.followed_accounts.size
		@all_posts = @user.posts_from_followed_accounts.size
		render json: {platforms: @platforms, numFollowedAccounts: @followed_accounts_size, numPosts: @all_posts}
	end
	
	
	
	private
	
		def user_params
			params.require(:user).permit(:email, :password, :password_confirmation)
		end
end
