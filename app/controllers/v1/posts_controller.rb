class V1::PostsController < ApplicationController
	def index
		if current_user
			@post = [{"author":"tyler", "content":"dev"}]
			render json: @post
		else
			head(:unauthorized)
		end
	end 
	
end