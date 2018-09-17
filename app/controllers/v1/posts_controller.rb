class V1::PostsController < ApplicationController
	def index
		if current_user
			@posts = current_user.posts_from_followed_accounts
			render json: @posts
		else
			head(:unauthorized)
		end
	end 
	
end