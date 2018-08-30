class V1::PostsController < ApplicationController
	def index
		@post = {"name":"tyler", "dev":"dev"}
		render json: @post
	end 
	
end