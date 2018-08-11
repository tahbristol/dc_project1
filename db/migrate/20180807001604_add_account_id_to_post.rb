class AddAccountIdToPost < ActiveRecord::Migration[5.2]
  def change
		add_column :posts, :followed_account_id, :integer
  end
end
