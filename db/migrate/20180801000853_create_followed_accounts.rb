class CreateFollowedAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :followed_accounts do |t|
      t.integer :account_id
      t.string :account_name

      t.timestamps
    end
  end
end
