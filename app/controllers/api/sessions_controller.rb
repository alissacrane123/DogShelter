class Api::SessionsController < ApplicationController

  def create

    if (params[:email])
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
    else     
      @user = Shelter.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )

    end

    if @user && params[:email]
      login(@user)
      render "api/users/show"
    elsif @user
      login(@user)
      render "api/shelters/show"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end
