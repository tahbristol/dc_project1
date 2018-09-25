class V1::PostsController < ApplicationController
	def index
		if current_user
			@posts = current_user.unread_posts
			render json: @posts
		else
			head(:unauthorized)
		end
	end 
	
end