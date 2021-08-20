class Api::DogsController < ApplicationController

  def create
    @dog = Dog.new(dog_params)

    if @dog.save
      render "api/dogs/show"
    else
      render json: @dog.errors.full_messages, status: 422
    end
  end

  def show
    @dog = Dog.find(params[:id])
    render "api/dogs/show"
  end

  def index
    @dogs = Dog.all
    render "api/dogs/index"
  end

  def destroy
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :age, :user_id, :shelter_id, :breed, :weight, :picture_url, :desc, :status)
  end

end
