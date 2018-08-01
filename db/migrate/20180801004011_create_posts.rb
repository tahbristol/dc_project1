class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :author
      t.string :content
      t.integer :timestamp
      t.string :social_media_platform
      t.boolean :marked_as_read

      t.timestamps
    end
  end
end
