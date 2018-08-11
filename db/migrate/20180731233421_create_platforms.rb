class CreatePlatforms < ActiveRecord::Migration[5.2]
  def change
    create_table :platforms do |t|
      t.string :name
      t.string :api_base_url

      t.timestamps
    end
  end
end
