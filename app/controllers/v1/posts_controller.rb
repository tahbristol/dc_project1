class V1::PostsController < ApplicationController
	def index
		if current_user
			@post = {"name":"tyler", "dev":"dev"}
			render json: @post
		else
			head(:unauthorized)
		end
	end 
	
end