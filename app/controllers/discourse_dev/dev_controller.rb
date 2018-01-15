module DiscourseDev
	class DevController < ApplicationController

		def my_page
			render :json => { name: "Тут будут разные API данные и т.д. А еще одна новая, по ссылке ниже..." }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end


SiteSetting.site_description = "Для разработчиков. Полезные инструменты по API, ссылки, материалы..."
