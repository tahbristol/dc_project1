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
		@all_posts = @user.unread_posts.size
		render json: {platforms: @platforms, numFollowedAccounts: @followed_accounts_size, numPosts: @all_posts}
	end
	
	def user_followed_accounts
		@user = current_user
		@followed_accounts = @user.followed_accounts
		@followed_accounts_info = @followed_accounts.collect do |fa|
			if fa.account_name.present?
				{
					accountName: fa.account_name,
			 		numPosts: fa.posts.size
				}
		 end
		end
		render json: @followed_accounts_info.compact
	end
	
	private
	
		def user_params
			params.require(:user).permit(:email, :password, :password_confirmation)
		end
end
