class CreatePartnerMerchants < ActiveRecord::Migration
  def change
    create_table :partner_merchants do |t|
      t.string :merchant_id
      t.string :access_token
      t.string :refresh_token

      t.timestamps
    end
  end
end
