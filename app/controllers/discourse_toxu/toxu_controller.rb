module DiscourseToxu
	class ToxuController < ApplicationController

		def my_page
			render :json => { name: "Что такое «Toxu»? И просто интересное о проекте... " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end


SiteSetting.site_description = "Почему сайт назван Toxu? Toxu» (Тоха) - это кличка энергичной и умной совы, которая живет в нашем офисе."
