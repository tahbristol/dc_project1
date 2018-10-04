class ChangeAccountIdType < ActiveRecord::Migration[5.2]
  def change
		change_column :followed_accounts, :account_id, :string
  end
end

