class ProfileController < ApplicationController

  layout false
  skip_before_action :preload_json, :check_xhr, :redirect_to_login_if_required


  def show
    
  @user = fetch_user_from_params(
      { include_inactive: current_user.try(:staff?) || (current_user && SiteSetting.show_inactive_accounts) },
      [{ user_profile: :card_image_badge }]
  )
    
     
     @ava = @user.avatar_template
     @ava.sub! '{size}', '120'
    
     path = SiteSetting.my_index ? :show : :no_show
     render path, content_type: 'text/html'
  end
  end
