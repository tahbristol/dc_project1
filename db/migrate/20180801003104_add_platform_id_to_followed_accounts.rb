class AddPlatformIdToFollowedAccounts < ActiveRecord::Migration[5.2]
  def change
		add_column :followed_accounts, :platform_id, :integer
  end
end
