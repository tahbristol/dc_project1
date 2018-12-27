class V1::PostsController < ApplicationController
  def index
    if current_user
      @posts = current_user.unread_posts
      render json: @posts
    else
      head(:unauthorized)
    end
  end
  
  def mark_as_read
    
    if current_user.nil?
      head(:unauthorized)
    end
    
    @post = current_user.unread_posts.where(id: params[:post_id]).first
    
    if @post&.mark_as_read()
      head(:ok)
    else
      head(:not_modified)
    end
    
  end
end