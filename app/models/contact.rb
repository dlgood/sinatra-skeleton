class Contact < ActiveRecord::Base
  

  validates :first_name, :last_name, :email, :phone, presence: true, length: {in:1..50}
  validates :email, uniqueness: true

end
