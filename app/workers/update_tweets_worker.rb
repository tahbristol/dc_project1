class UpdateTweetsWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(user_id)
    user = User.find(user_id)
    twitter_feed = TwitterFeed.new(user)
    user.followed_accounts.each do |followed_account|
      twitter_feed.get_and_save_followed_account(followed_account.account_name)
      twitter_feed.get_tweets
      twitter_feed.save_tweets_as_posts
    end
  end
end
