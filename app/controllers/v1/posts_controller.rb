class V1::PostsController < ApplicationController
	def index
		if current_user
			@posts = Post.all
			render json: @posts
		else
			head(:unauthorized)
		end
	end 
	
end