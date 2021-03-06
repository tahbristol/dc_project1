Rails.application.routes.draw do
	default_url_options :host => "localhost:3001"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	namespace :v1 do
		resources :posts, only: [:index]
    post '/posts/mark_as_read', to: 'posts#mark_as_read'
		resources :twitter_feed
		resources :users, only: [:new, :create, :destroy]
		resources :followed_accounts, only: [:create, :destroy]
		post '/start_feed_lookup', to: 'twitter_feed#start_feed_lookup'
		get '/user_platform_info', to: 'users#user_platform_info'
		get '/user_followed_accounts_info', to: 'users#user_followed_accounts_info'
	end

  namespace :auth do
    resource :sessions, only: [:create, :destroy]
    resource :confirmation, only: [:create]
  end
end
