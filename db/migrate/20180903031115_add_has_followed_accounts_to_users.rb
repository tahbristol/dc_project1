class AddHasFollowedAccountsToUsers < ActiveRecord::Migration[5.2]
  def change
		add_column :users, :hasFollowedAccounts, :boolean
  end
end
