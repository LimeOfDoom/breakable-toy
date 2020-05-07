class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         has_many :conversations
         has_many :messages, through: :conversations

         has_many :relationships
         has_many :organizations, through: :relationships

         validates :first_name, :last_name, :role, presence: true

  def admin?
    role == "admin"
  end
  
end
