class AddSourceToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :source_url, :string
  end
end
