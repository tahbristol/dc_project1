class RemoveHasFollowedAccountFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :hasFollowedAccounts, :boolean
  end
end
