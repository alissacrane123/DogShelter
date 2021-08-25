class Api::DogApplicationsController < ApplicationController


  def create
    @dog_app = DogApplication.new(dog_application_params)

    if @dog_app.save
      render "api/dog_applications/show"
    else
      render json: @dog_app.errors.full_messages, status: 422
    end

  end



  private

  def dog_application_params
    params.require(:dog_application).permit(:user_id, :dog_id, :shelter_id)
  end

end
