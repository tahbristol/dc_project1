class ChangePostColumn < ActiveRecord::Migration[5.2]
  def change
		change_column :posts, :timestamp, :string
  end
end
