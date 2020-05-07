class CreateRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :relationships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :organization, null: false

     t.timestamps null: false
    end
  end
end
