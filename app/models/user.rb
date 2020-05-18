class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         belongs_to :organization, optional: true

         validates :first_name, :last_name, :role, presence: true

         acts_as_messageable

  def admin?
    role == "admin"
  end

  def mailboxer_name
    self.first_name
  end

  def mailboxer_email(object)
    self.email
  end

end
