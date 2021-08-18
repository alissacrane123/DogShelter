class Api::SheltersController < ApplicationController
  def create
    @shelter = Shelter.new(shelter_params)

    if @shelter.save
      login(@shelter)
      render "api/shelters/show"
    else
      render json: @shelter.errors.full_messages, status: 422
    end
  end

  def show
    @shelter = Shelter.find(params[:id])
    render "api/shelters/show"
  end

  private

  def shelter_params
    params.require(:shelter).permit(:name, :address, :city, :state, :zipcode, :username, :email, :phone_number, :password)
  end
end
