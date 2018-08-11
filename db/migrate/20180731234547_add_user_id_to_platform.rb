class AddUserIdToPlatform < ActiveRecord::Migration[5.2]
  def change
    add_column :platforms, :user_id, :integer
  end
end
