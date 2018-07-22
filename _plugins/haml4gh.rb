module GithubPagesHamlHelper
  # require 'haml'
  # require 'haml/exec'

  # Github Pages don't support Haml plugins, so have to run Html2Haml locally and commit the results
  class Generator < Jekyll::Generator
    def generate(site)

      partials_source = parse_partials_source(site)
      page_source = parse_page_source(site)
      destination = site.config["source"]

      generate_partials(partials_source, destination)

      generate_pages(page_source, destination)
    end

    def generate_partials(partials_source, destination)
      Dir.glob(File.join(partials_source, '*.haml')).each do |source_file|
        destination_file = source_file.sub(partials_source, destination).sub(/\.haml$/i, '.html')

        if file_unchanged?(destination_file, source_file)
          log 'skipped ' + destination_file
        else
          log `haml #{source_file} #{destination_file}`
          log "#{source_file} -->> #{destination_file}"
        end
      end
    end

    def generate_pages(page_source, destination)
      Dir.glob(File.join(page_source, '*.haml')).each do |source_file|
        destination_file = source_file.sub(page_source, destination).sub(/\.haml$/i, '.html')

        if file_unchanged?(destination_file, source_file)
          log 'skipped ' + destination_file
        else
          log `haml #{source_file} #{destination_file}`
          log "#{source_file} -->> #{destination_file}"
        end
      end
    end

    def parse_partials_source(site)
      plugin_config = site.config["haml4gh"]
      File.join(site.config["source"], (plugin_config && plugin_config["source"] || "_source/partials"))
      # TODO: improve this check
    end

    def parse_page_source(site)
      plugin_config = site.config["haml4gh"]
      File.join(site.config["source"], (plugin_config && plugin_config["source"] || "_source"))
      # TODO: improve this check 
    end

    def file_unchanged?(destination_file, source_file)
      File.exists?(destination_file) && (File.mtime(destination_file) >= File.mtime(source_file))
    end

    def log(msg)
      print "\nhaml4gh: #{msg}" unless msg.empty?
    end
  end
end