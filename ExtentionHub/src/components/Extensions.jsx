import { useState } from "react"
import { Button } from "./Button"
import { Extension } from "./Extension"
import "./Extensions.css"

const allExtensions = [
    {id: 1, logo: "❤️", category: "YouTube Extensions", name: "YouTube Cleaner", description: "Remove videos from homepage."},
    {id: 2, logo: "👌", category: "Reddit Extensions", name: "Reddit Enhancer", description: "Does something on reddit"},
    {id: 3, logo: "😒", category: "Web Browser Extensions", name: "Saving Links", description: "Save your links!"}
];

export function Extensions() {
    const [sort, setSort] = useState("");
    const [categories, setCategories] = useState("All");

    const filteredExtensions = allExtensions.filter((ext) =>
        ext.name.toLowerCase().includes(sort.toLowerCase()) &&
        (categories === "All" || ext.category === categories)
    );
    
    return (
        <section id="extensions" className="extensions-section">
            <div className="catalog">
                <Button
                    onClick={() => setCategories("All")} 
                    className={`filter-btn ${categories === "All" ? "active" : ""}`} 
                    value="All"/>
                <Button 
                    onClick={() => setCategories("Web Browser Extensions")} 
                    className="filter-btn" 
                    value="Web Browser Extensions" />
                <Button 
                    onClick={() => setCategories("YouTube Extensions")} 
                    className="filter-btn" 
                    value="YouTube Extensions" /> 
                <Button 
                    onClick={() => setCategories("Reddit Extensions")}
                    className="filter-btn" 
                    value="Reddit Extensions" />
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="search">Search Extentions</label>
                    <input 
                        type="text" 
                        id="search" 
                        placeholder="Search extensions..." 
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    />
                </form>
            </div>
           <div className="extensions">
                {filteredExtensions.map((ext) => (
                    <Extension key={ext.id} className="extension" {...ext} />
                ))}
            </div>
        </section>
    ) 
}
