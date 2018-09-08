class ChangeFeedModelName < ActiveRecord::Migration[5.2]
  def change
		rename_table :feeds, :twitter_feeds
  end
end
