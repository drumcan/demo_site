class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :payment_token
      t.string :subscription_id
      t.string :plan

      t.timestamps
    end
  end
end
