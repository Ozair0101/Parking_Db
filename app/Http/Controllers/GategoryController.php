<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GategoryController extends Controller
{
    public function create() {
        return Inertia::render("Category/Create"); 
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255|min:2|unique:'.Category::class
        ]);
        Category::create([
            'name' => $request->name,
            'user_id' => Auth::id()
        ]);
        return redirect()->back()->with('success'); 
    }

    public function update(Request $request, $id) {

        $request->validate([
            'name' => 'required|string|max:255|min:2|unique:'.Category::class
        ]);
    
        $category = Category::findOrFail($id);
        $category->update([
            'name' => $request->name,
            'user_id' => Auth::id()
        ]);
        return redirect()->route('categroy.index');
    }

    public function index() {
        $report = Category::with('user')->get();
        return Inertia::render("Category/Index", ['report'=>$report]); 
    }
    
    public function edit($id) {
        $data = Category::findOrFail($id);
        return Inertia::render("Category/Edit", ['data'=>$data]); 
    }

    public function delete($id) {
        $category = Category::findOrFail($id);
        $category->delete(); 
        return redirect()->back()->with('success');
    }

    public function report() {
        return Inertia::render("Report"); 
    }
}
