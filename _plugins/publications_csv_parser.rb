require 'csv'

module Jekyll
  class PublicationsGenerator < Generator
    safe true
    priority :high

    def generate(site)
      # Path to the CSV file - adjust as needed
      csv_path = File.join(site.source, 'assets', 'data', 'citations.csv')
      
      if File.exist?(csv_path)
        # Read the CSV file
        publications = []
        years = {}
        
        CSV.foreach(csv_path, headers: true) do |row|
          # Convert row to hash with string keys
          pub = row.to_h
          
          # Make sure the year is present and valid
          year = pub["Year"].to_s.strip
          
          if year.match?(/^\d{4}$/)
            # Add to publications list
            publications << pub
            
            # Group by year
            years[year] ||= []
            years[year] << pub
          end
        end
        
        # Sort publications by year (newest first)
        sorted_years = years.keys.sort.reverse
        
        # Add data to site
        site.data['publications'] = publications
        site.data['publications_by_year'] = years
        site.data['publication_years'] = sorted_years
      else
        Jekyll.logger.warn "PublicationsGenerator:", "CSV file not found at #{csv_path}"
      end
    end
  end
end