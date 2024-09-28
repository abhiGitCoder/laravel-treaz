<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/react/app.tsx'])
</head>

<body>
    <div id="app"></div>
</body>

</html>
